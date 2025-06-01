interface IDashboardItem {
  name: string;
  slug: string;
  tag?: "useful" | "balance" | "skins" | "auth";
  forHeader?: boolean;
}

class Dashboard {
  CART = {
    name: "Корзина",
    slug: "/cart",
    tag: "auth",
  } satisfies IDashboardItem;

  ACCOUNT = {
    name: "Личный кабинет",
    slug: "/i",
    tag: "auth",
  } satisfies IDashboardItem;

  SKINS = {
    name: "Купить скины",
    slug: "/skins/cs2",
    forHeader: true,
  } satisfies IDashboardItem;

  SKINS_CS2 = {
    name: "Купить скины cs2",
    slug: "/skins/cs2",
    tag: "skins",
  } satisfies IDashboardItem;

  SKINS_DOTA2 = {
    name: "Купить скины dota2",
    slug: "/skins/dota2",
    tag: "skins",
  } satisfies IDashboardItem;

  SKINS_RUST = {
    name: "Купить скины rust",
    slug: "/skins/rust",
    tag: "skins",
  } satisfies IDashboardItem;

  BALANCE = {
    name: "Пополнить баланс",
    slug: "/service/steam",
    forHeader: true,
  } satisfies IDashboardItem;

  BALANCE_STEAM = {
    name: "Пополнить баланс Steam",
    slug: "/service/steam",
    tag: "balance",
  } satisfies IDashboardItem;

  BALANCE_EPIC = {
    name: "Пополнить баланс Epic",
    slug: "/service/epic-games",
    tag: "balance",
  } satisfies IDashboardItem;

  BALANCE_PS = {
    name: "Пополнить баланс PlayStation",
    slug: "/service/play-station",
    tag: "balance",
  } satisfies IDashboardItem;

  BALANCE_XBOX = {
    name: "Пополнить баланс Xbox",
    slug: "/service/xbox",
    tag: "balance",
  } satisfies IDashboardItem;

  BALANCE_BLIZZARD = {
    name: "Пополнить баланс Blizzard",
    slug: "/service/blizzard",
    tag: "balance",
  } satisfies IDashboardItem;

  FAQ = {
    name: "FAQ",
    slug: "/faq",
    tag: "useful",
    forHeader: true,
  } satisfies IDashboardItem;

  GUARANTEE = {
    name: "Гарантии",
    slug: "/guarantee",
    tag: "useful",
    forHeader: true,
  } satisfies IDashboardItem;

  HOME = {
    name: "Главная",
    slug: "/",
    forHeader: false,
  } satisfies IDashboardItem;

  BLOG = {
    name: "Блог",
    slug: "/blog",
    tag: "useful",
    forHeader: true,
  } satisfies IDashboardItem;

  getAll(): IDashboardItem[] {
    return Object.values(this);
  }
  getForHeader(): IDashboardItem[] {
    return Object.values(this).filter((item) => item.forHeader);
  }

  getByTag(tag: "useful" | "balance" | "skins"): IDashboardItem[] {
    return Object.values(this).filter((item) => item.tag === tag);
  }

  getSkins() {
    return this.getByTag("skins");
  }

  getBalance() {
    return this.getByTag("balance");
  }

  getUseful() {
    return this.getByTag("useful");
  }
}

export const APP_PAGES = new Dashboard();
