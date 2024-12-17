import * as jwt from 'jsonwebtoken';
import envConfig from '../config/env.config';

export function generateToken(
  payload: object,
  expiresIn: string = '1h',
): string {
  return jwt.sign(payload, envConfig.jwtSecret, { expiresIn });
}

export function verifyToken(token: string): object | null {
  try {
    return jwt.verify(token, envConfig.jwtSecret);
  } catch (e) {
    return null;
  }
}
