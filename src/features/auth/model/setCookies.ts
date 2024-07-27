import { cookieManager } from '@shared/lib/cookieManager';

export const setCookies = (
  accessToken: string,
  refreshToken: string,
  expires: number
): void => {
  cookieManager.setCookie({
    name: 'accessToken',
    value: accessToken,
  });
  cookieManager.setCookie({
    name: 'refreshToken',
    value: refreshToken,
    expires,
  });
};
