interface IDashboardItem {
  name: string;
  slug: string;
  hiddenInNav?: boolean;
}

class PrivateDashboard {
  CART = {
    name: "Корзина",
    slug: "/cart",
    hiddenInNav: true,
  } satisfies IDashboardItem;

  ORDERS = {
    name: "Транзакции",
    slug: "/i/orders",
  } satisfies IDashboardItem;

  REFERAL = {
    name: "Реферальная программа",
    slug: "/i/referal",
  } satisfies IDashboardItem;

  ACCOUNT_BALANCE = {
    name: "Баланс аккаунта",
    slug: "/i/balance",
  } satisfies IDashboardItem;

  getAll(): IDashboardItem[] {
    return Object.values(this);
  }
  getForNav(): IDashboardItem[] {
    return Object.values(this).filter((item) => !item.hiddenInNav);
  }
}

export const PRIVATE_PAGES = new PrivateDashboard();
