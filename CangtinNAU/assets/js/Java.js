/* ==========================================================================
   CĂNG TIN ĐẠI HỌC NGHỆ AN - SHARED JAVASCRIPT
   Handles menu rendering, filtering, search, tray/cart & contact interactions
   ========================================================================== */

const NAU_MENU_DATA = [
  // Hàng 1 - Món chính
  {
    id: 1,
    category: "Món chính",
    name: "Cơm gà chiên mắm",
    desc: "Cơm nóng, gà chiên thơm ngon.",
    price: 30000,
    priceText: "30.000đ",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    category: "Món chính",
    name: "Cơm sườn nướng",
    desc: "Sườn nướng thơm, cơm dẻo.",
    price: 32000,
    priceText: "32.000đ",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    category: "Món chính",
    name: "Cơm rang",
    desc: "Cơm rang vàng thơm ngon.",
    price: 25000,
    priceText: "25.000đ",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    category: "Món chính",
    name: "Phở bò",
    desc: "Nước dùng thơm, thịt bò mềm.",
    price: 30000,
    priceText: "30.000đ",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
  },

  // Hàng 2 - Món chính
  {
    id: 5,
    category: "Món chính",
    name: "Mì xào rau củ",
    desc: "Mì xào nóng cùng rau củ.",
    price: 25000,
    priceText: "25.000đ",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    category: "Món chính",
    name: "Bánh mì trứng",
    desc: "Bánh mì giòn, trứng thơm.",
    price: 15000,
    priceText: "15.000đ",
    image: "https://tse4.mm.bing.net/th/id/OIP.HbRKmYO6qe-SVh68LAFpuwHaE6?r=0&pid=Api&h=220&P=0"
  },
  {
    id: 7,
    category: "Món chính",
    name: "Bún chả",
    desc: "Bún chả thơm ngon, đậm đà.",
    price: 22000,
    priceText: "22.000đ",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    category: "Món chính",
    name: "Xôi gà",
    desc: "Xôi gà thơm ngon, mềm dẻo.",
    price: 28000,
    priceText: "28.000đ",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
  },

  // Hàng 3 - Đồ uống
  {
    id: 9,
    category: "Đồ uống",
    name: "Trà sữa trân châu",
    desc: "Trà sữa béo ngậy, trân châu dai.",
    price: 22000,
    priceText: "22.000đ",
    image: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    category: "Đồ uống",
    name: "Trà đào",
    desc: "Trà đào mát lạnh, thơm dịu.",
    price: 18000,
    priceText: "18.000đ",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    category: "Đồ uống",
    name: "Cà phê sữa đá",
    desc: "Cà phê đậm vị.",
    price: 16000,
    priceText: "16.000đ",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    category: "Đồ uống",
    name: "Nước cam vắt tươi",
    desc: "Nước cam tươi mát.",
    price: 15000,
    priceText: "15.000đ",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
  },

  // Hàng 4 - Đồ uống & Ăn vặt
  {
    id: 13,
    category: "Đồ uống",
    name: "Sinh tố dâu tây",
    desc: "Sinh tố tươi mát, bổ dưỡng.",
    price: 22000,
    priceText: "22.000đ",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    category: "Đồ uống",
    name: "Nước khoáng tinh khiết",
    desc: "Nước suối đóng chai.",
    price: 20000,
    priceText: "20.000đ",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    category: "Ăn vặt",
    name: "Khoai tây chiên lắc phô mai",
    desc: "Khoai tây chiên giòn rụm.",
    price: 18000,
    priceText: "18.000đ",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    category: "Ăn vặt",
    name: "Bánh tráng trộn",
    desc: "Bánh tráng trộn đậm vị.",
    price: 15000,
    priceText: "15.000đ",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
  },

  // Hàng 5 - Ăn vặt
  {
    id: 17,
    category: "Ăn vặt",
    name: "Gà rán giòn rụm",
    desc: "Gà rán nóng giòn hấp dẫn.",
    price: 25000,
    priceText: "25.000đ",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    category: "Ăn vặt",
    name: "Bánh bông lan trứng muối",
    desc: "Bánh mềm thơm, béo ngậy.",
    price: 18000,
    priceText: "18.000đ",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19,
    category: "Ăn vặt",
    name: "Xúc xích chiên giòn",
    desc: "Xúc xích chiên nóng hổi.",
    price: 12000,
    priceText: "12.000đ",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    category: "Ăn vặt",
    name: "Bánh gạo cay",
    desc: "Bánh gạo sốt cay Hàn Quốc.",
    price: 20000,
    priceText: "20.000đ",
    image: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?auto=format&fit=crop&w=600&q=80"
  }
];

const FEATURED_TRAY_ITEMS = [
  {
    id: 101,
    name: "Cháo Lươn Xứ Nghệ",
    desc: "Lươn đồng xào nghệ tươi cay nồng, ăn kèm bánh mì giòn hoặc bánh mướt.",
    price: 28000,
    priceText: "28.000đ",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 102,
    name: "Cơm Sườn Nướng ",
    desc: "Sườn cốt lết nướng mềm thấm vị, kèm dưa chua, rau luộc và canh rau ngọt.",
    price: 25000,
    priceText: "25.000đ",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 103,
    name: "Trà Chanh Giã Tay",
    desc: "Chanh tươi giã tay thơm tinh dầu kết hợp trà nhài mát lạnh giải nhiệt.",
    price: 12000,
    priceText: "12.000đ",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 104,
    name: "Bánh Mì Trứng Xúc Xích",
    desc: "Bánh giòn kẹp 2 trứng ốp la, xúc xích, pate gan và rau dưa.",
    price: 15000,
    priceText: "15.000đ",
    image: "https://tse3.mm.bing.net/th/id/OIP.zPR_4gkKK719TiiH7QiTGQHaE7?r=0&pid=Api&h=220&P=0"
  }
];

let nauCartState = JSON.parse(localStorage.getItem("nau_canteen_cart") || "[]");
let currentCategory = "all";
let searchQuery = "";

function saveCart() {
  localStorage.setItem("nau_canteen_cart", JSON.stringify(nauCartState));
  updateCartBadge();
  renderTrayPanel();
}

function getTotalCartCount() {
  return nauCartState.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
  const badge = document.getElementById("cartCount");
  if (badge) {
    badge.textContent = getTotalCartCount();
  }
}

function showNauToast(message) {
  const toastEl = document.getElementById("nauToast");
  const toastMsg = document.getElementById("nauToastMsg");
  if (!toastEl || !toastMsg) return;
  toastMsg.textContent = message;
  const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 1800 });
  toast.show();
}

function addItemToCart(itemObj) {
  const existing = nauCartState.find((i) => i.name === itemObj.name);
  if (existing) {
    existing.qty += 1;
  } else {
    nauCartState.push({
      name: itemObj.name,
      price: itemObj.price,
      priceText: itemObj.priceText,
      qty: 1
    });
  }
  saveCart();
}

function normalizeVietnamese(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

function buildFoodCardHTML(item) {
  return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <article class="nau-food-card">
        <div class="nau-food-cat">${item.category}</div>
        <div class="nau-food-img-box">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="nau-food-body">
          <h3 class="nau-food-name">${item.name}</h3>
          <p class="nau-food-desc">${item.desc}</p>
          <div class="nau-food-price">${item.priceText}</div>
          <button type="button" class="nau-btn-add" data-food-id="${item.id}" data-action="add">
            Thêm vào giỏ
          </button>
          <button type="button" class="nau-btn-buy" data-food-id="${item.id}" data-action="buy">
            Mua ngay
          </button>
        </div>
      </article>
    </div>
  `;
}

function initMenuGrid() {
  const grid = document.getElementById("nauMenuGrid");
  if (!grid) return;

  const isHomePage = grid.dataset.mode === "home";
  const countAllEl = document.getElementById("countAll");
  if (countAllEl) {
    countAllEl.textContent = NAU_MENU_DATA.length;
  }

  function render() {
    const normalizedSearch = normalizeVietnamese(searchQuery);
    let list = NAU_MENU_DATA.filter((item) => {
      const catMatch = currentCategory === "all" || item.category === currentCategory;
      const searchMatch =
        normalizedSearch === "" ||
        normalizeVietnamese(item.name).includes(normalizedSearch) ||
        normalizeVietnamese(item.desc).includes(normalizedSearch);
      return catMatch && searchMatch;
    });

    if (isHomePage && currentCategory === "all" && normalizedSearch === "") {
      list = NAU_MENU_DATA;
    }

    const emptyEl = document.getElementById("emptyMenuAlert");
    if (list.length === 0) {
      grid.innerHTML = "";
      if (emptyEl) emptyEl.classList.remove("d-none");
      return;
    }

    if (emptyEl) emptyEl.classList.add("d-none");
    grid.innerHTML = list.map(buildFoodCardHTML).join("");
  }

  document.querySelectorAll(".nau-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nau-filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      render();
    });
  });

  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      render();
    });
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-food-id]");
    if (!btn) return;
    const food = NAU_MENU_DATA.find((m) => m.id === Number(btn.dataset.foodId));
    if (!food) return;

    addItemToCart(food);
    showNauToast(
      btn.dataset.action === "buy"
        ? `Đã chọn mua ngay "${food.name}" (${food.priceText})`
        : `Đã thêm "${food.name}" vào giỏ hàng`
    );
  });

  render();
}

function initAboutTrayPage() {
  const container = document.getElementById("aboutFeaturedGrid");
  if (!container) return;

  container.innerHTML = FEATURED_TRAY_ITEMS.map(
    (item) => `
      <div class="col-12 col-sm-6">
        <article class="about-featured-card">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <h4 class="nau-food-name">${item.name}</h4>
          <p class="nau-food-desc">${item.desc}</p>
          <div class="d-flex align-items-center justify-content-between mt-auto mb-2">
            <span class="nau-food-price mb-0">${item.priceText}</span>
            <button type="button" class="about-plus-btn" data-tray-add="${item.id}">+ Thêm</button>
          </div>
          <button type="button" class="nau-btn-add" data-tray-add="${item.id}">Thêm vào giỏ</button>
          <button type="button" class="nau-btn-buy" data-tray-buy="${item.id}">Mua ngay</button>
        </article>
      </div>
    `
  ).join("");

  container.addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-tray-add]");
    const buyBtn = e.target.closest("[data-tray-buy]");
    if (addBtn) {
      const food = FEATURED_TRAY_ITEMS.find((f) => f.id === Number(addBtn.dataset.trayAdd));
      if (food) {
        addItemToCart(food);
        showNauToast(`Đã thêm "${food.name}" vào khay đồ ăn`);
      }
    } else if (buyBtn) {
      const food = FEATURED_TRAY_ITEMS.find((f) => f.id === Number(buyBtn.dataset.trayBuy));
      if (food) {
        addItemToCart(food);
        showNauToast(`Đã chọn mua ngay "${food.name}" (${food.priceText})`);
      }
    }
  });

  const clearBtn = document.getElementById("clearTrayBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      nauCartState = [];
      saveCart();
      showNauToast("Đã xóa toàn bộ món trong khay");
    });
  }

  const issueBtn = document.getElementById("issueTraySlipBtn");
  if (issueBtn) {
    issueBtn.addEventListener("click", () => {
      if (nauCartState.length === 0) {
        showNauToast("Khay đồ ăn đang trống, hãy chọn món trước!");
        return;
      }
      const area = document.getElementById("pickupAreaSelect")?.value || "Căng tin khu A";
      showNauToast(`Đã xuất phiếu nhận đơn tại ${area} (${getTotalCartCount()} món)`);
    });
  }

  renderTrayPanel();
}

function renderTrayPanel() {
  const listEl = document.getElementById("trayItemsList");
  const totalEl = document.getElementById("trayTotalPrice");
  if (!listEl || !totalEl) return;

  if (nauCartState.length === 0) {
    listEl.innerHTML = `<p class="text-center text-muted small my-3">Chưa có món ăn nào trong khay.<br/>Hãy chọn món từ thực đơn nhé!</p>`;
    totalEl.textContent = "0đ";
    return;
  }

  let total = 0;
  listEl.innerHTML = nauCartState
    .map((item) => {
      total += item.price * item.qty;
      return `
        <div class="d-flex justify-content-between align-items-center py-1 border-bottom border-light small">
          <span><strong>${item.name}</strong> x${item.qty}</span>
          <span class="fw-bold text-danger">${(item.price * item.qty).toLocaleString("vi-VN")}đ</span>
        </div>
      `;
    })
    .join("");
  totalEl.textContent = `${total.toLocaleString("vi-VN")}đ`;
}

function initNewsAndContactForms() {
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("newsletterEmail");
      if (!input || !input.value.trim()) {
        showNauToast("Vui lòng nhập email sinh viên hợp lệ.");
        return;
      }
      showNauToast(`Đã đăng ký nhận ưu đãi cho ${input.value.trim()}`);
      input.value = "";
    });
  }

  const contactForm = document.getElementById("contactFeedbackForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showNauToast("Đã ghi nhận tin nhắn góp ý gửi tới Căng tin NAU!");
      contactForm.reset();
    });
  }

  document.querySelectorAll("[data-combo-register]").forEach((btn) => {
    btn.addEventListener("click", () => {
      showNauToast(`Đã ghi nhận đăng ký ${btn.dataset.comboRegister}`);
    });
  });

  const cartBtn = document.getElementById("cartButton");
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      const count = getTotalCartCount();
      if (count === 0) {
        showNauToast("Giỏ hàng hiện đang trống.");
      } else {
        const sum = nauCartState.reduce((acc, i) => acc + i.price * i.qty, 0);
        showNauToast(`Giỏ hàng có ${count} món — Tạm tính: ${sum.toLocaleString("vi-VN")}đ`);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  initMenuGrid();
  initAboutTrayPage();
  initNewsAndContactForms();
});