import Cookies from 'js-cookie';

class CookieManager {
  setCookie(name: string, value: string): void {
    Cookies.set(name, value, {
      expires: 3,
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
