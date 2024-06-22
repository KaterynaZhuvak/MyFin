import Cookies from 'js-cookie';

interface CookieOptions {
  name: string;
  value: string;
  expires?: number;
}

class CookieManager {
  setCookie({ name, value, expires = 3 }: CookieOptions): void {
    Cookies.set(name, value, {
      expires,
      secure: true,
      sameSite: 'Lax',
    });
  }

  getCookie(name: string): string | undefined {
    return Cookies.get(name);
  }

  removeCookie(name: string): void {
    Cookies.remove(name);
  }
}

export const cookieManager = new CookieManager();
