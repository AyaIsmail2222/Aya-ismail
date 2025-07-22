let darkmode = document.querySelector("#dark");
darkmode.onclick = () => {
  darkmode.classList.toggle("bi-cloud-sun");
  document.body.classList.toggle("sunshine");
};

const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  links.forEach((link) => {
    const sectionId = link.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});

// -----------------------

// document.addEventListener("DOMContentLoaded", () => {
//   // اختاري الفورم الأوّل (لأنه بتصير nested في HTML الحالي)
//   const form = document.querySelector("body > div.container form.my-5");
//   const postList = document.getElementById("postList");
//   const removeAllBtn = document.getElementById("removeAll");
//   let postCount = 0;

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const titleEl = document.getElementById("title");
//     const categoryEl = document.getElementById("Category"); // مطابق للـ HTML
//     const bodyEl = document.getElementById("body");
//     // احصلي على حقل الصورة (هو داخل form داخلي)
//     const fileInput = document.querySelector('input[type="file"]');

//     const title = titleEl.value.trim();
//     const category = categoryEl.value.trim();
//     const body = bodyEl.value.trim();
//     const file = fileInput.files[0];

//     if (!title || !category || !body || !file) {
//       return alert("يرجى ملء كل الحقول واختيار صورة");
//     }

//     const imgURL = URL.createObjectURL(file);

//     postCount++;
//     const tr = document.createElement("tr");
//     tr.innerHTML = `
//       <td>${postCount}</td>
//       <td><img src="${imgURL}" style="max-width:120px;"></td>
//       <td>${title}</td>
//       <td>${body}</td>
//       <td>${category}</td>
//       <td><button class="btn btn-warning btn-sm edit-btn">Edit</button></td>
//       <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
//     `;
//     postList.appendChild(tr);

//     form.reset();

//     tr.querySelector(".delete-btn").addEventListener("click", () =>
//       tr.remove()
//     );
//     tr.querySelector(".edit-btn").addEventListener("click", () => {
//       titleEl.value = title;
//       categoryEl.value = category;
//       bodyEl.value = body;
//       tr.remove();
//     });
//   });

//   removeAllBtn.addEventListener("click", () => {
//     postList.innerHTML = "";
//     postCount = 0;
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   // اختاري الفورم الأوّل (لأنه بتصير nested في HTML الحالي)
//   const form = document.querySelector("body > div.container form.my-5");
//   const postList = document.getElementById("postList");
//   const removeAllBtn = document.getElementById("removeAll");
//   let postCount = 0;

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const titleEl = document.getElementById("title");
//     const categoryEl = document.getElementById("Category"); // مطابق للـ HTML
//     const bodyEl = document.getElementById("body");
//     // احصلي على حقل الصورة (هو داخل form داخلي)
//     const fileInput = document.querySelector('input[type="file"]');

//     const title = titleEl.value.trim();
//     const category = categoryEl.value.trim();
//     const body = bodyEl.value.trim();
//     const file = fileInput.files[0];

//     if (!title || !category || !body || !file) {
//       return alert("يرجى ملء كل الحقول واختيار صورة");
//     }

//     const imgURL = URL.createObjectURL(file);

//     postCount++;
//     const tr = document.createElement("tr");
//     tr.innerHTML = `
//       <td>${postCount}</td>
//       <td><img src="${imgURL}" style="max-width:120px;"></td>
//       <td>${title}</td>
//       <td>${body}</td>
//       <td>${category}</td>
//       <td><button class="btn btn-warning btn-sm edit-btn">Edit</button></td>
//       <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
//     `;
//     postList.appendChild(tr);

//     form.reset();

//     tr.querySelector(".delete-btn").addEventListener("click", () =>
//       tr.remove()
//     );
//     tr.querySelector(".edit-btn").addEventListener("click", () => {
//       titleEl.value = title;
//       categoryEl.value = category;
//       bodyEl.value = body;
//       tr.remove();
//     });
//   });

//   removeAllBtn.addEventListener("click", () => {
//     postList.innerHTML = "";
//     postCount = 0;
//   });
// });
