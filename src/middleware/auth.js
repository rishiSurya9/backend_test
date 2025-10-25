import { verifyToken } from '../utils/jwt.js';
import { prisma } from '../prisma/client.js';

export async function requireAuth(req, res, next) {
  try {
    const header = req.headers['authorization'] || '';
    let [, token] = header.split(' ');
    if (!token && req.cookies && req.cookies.access_token) {
      token = req.cookies.access_token;
    }
    if (!token) return res.status(401).json({ ok: false, error: 'Unauthorized' });

    const decoded = verifyToken(token);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) return res.status(401).json({ ok: false, error: 'Unauthorized' });

    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' });
  }
}
