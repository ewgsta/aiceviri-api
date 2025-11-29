import { config } from '../config/config.js';
import { ApiError } from '../utils/errors.js';

export function validateApiKey(req, res, next) {
  const requestApiKey = req.headers['x-api-key'];

  if (!requestApiKey) {
    throw new ApiError(2001, 'API anahtarı eksik');
  }

  if (requestApiKey !== config.apiKey) {
    throw new ApiError(2002, 'API anahtarı geçersiz');
  }

  req.openRouterApiKey = config.openRouterApiKey;
  next();
}
