document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    const inputAmount = getInputById("noakhali-input");
    const noakhaliAmount = getAmountByID("noakhali-amount");
    let mainBalance = getAmountByID("main-balance");
    if (
      isNaN(inputAmount) ||
      inputAmount <= 0 ||
      typeof inputAmount === String ||
      mainBalance <= 0 ||
      mainBalance < inputAmount
    ) {
      alert("Invalid input. Please enter a non-negative number.");
      return;
    }
    let newAmount = noakhaliAmount + inputAmount;
    let newBalance = mainBalance - inputAmount;
    document.getElementById("noakhali-amount").innerText = newAmount.toFixed(2);
    document.getElementById("main-balance").innerText = newBalance.toFixed(2);
    my_modal_1.showModal();

    // doante history
    const inputValuex = parseFloat(
      document.getElementById("noakhali-input").value
    );
    const historySection = document.getElementById("history-section");
    const historyCard = document.createElement("div");
    historyCard.className =
      "bg-white p-4 rounded-lg mt-3 mx-auto shadow-lg w-10/12 border border-solid border-gray-500";
    historyCard.innerHTML = `
    <p class = 'text-xl font-bold text-black mb-1'> ${inputValuex.toFixed(
      2
    )} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <p> ${new Date().toDateString()} ${new Date().toLocaleTimeString()} GMT +0${-(
      new Date().getTimezoneOffset() / 60
    )}00 (Bangladesh Standard Time)  
  </p>
  `;
    historySection.appendChild(historyCard);
    // end
  });

//   feni donate
document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function () {
    const feniAmount = getAmountByID("feni-amount");
    const feniInputAmount = getInputById("feni-input");
    let mainBalance = getAmountByID("main-balance");
    if (
      isNaN(feniInputAmount) ||
      feniInputAmount <= 0 ||
      typeof feniInputAmount === String ||
      mainBalance <= 0 ||
      mainBalance < feniInputAmount
    ) {
      alert("Invalid input. Please enter a non-negative number.");
      return;
    } else {
    }
    let newAmount = feniAmount + feniInputAmount;
    let newBalance = mainBalance - feniInputAmount;
    document.getElementById("feni-amount").innerText = newAmount.toFixed(2);
    document.getElementById("main-balance").innerText = newBalance.toFixed(2);
    my_modal_1.showModal();
    // doante history
    const inputValuex = parseFloat(document.getElementById("feni-input").value);
    const historySection = document.getElementById("history-section");
    const historyCard = document.createElement("div");
    historyCard.className =
      "bg-white p-4 rounded-lg mt-3 mx-auto shadow-lg w-10/12 border border-solid border-gray-500";
    historyCard.innerHTML = `
     <p class = 'text-xl font-bold text-black mb-1'> ${inputValuex.toFixed(
       2
     )} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
     <p> ${new Date().toDateString()} ${new Date().toLocaleTimeString()} GMT +0${-(
      new Date().getTimezoneOffset() / 60
    )}00 (Bangladesh Standard Time)  
   </p>
   `;
    historySection.appendChild(historyCard);
    // end
  });

//   qota injuri donate

document
  .getElementById("qota-donate-btn")
  .addEventListener("click", function () {
    const qotaAmount = getAmountByID("qota-amount");
    const qotaInputAmount = getInputById("qota-input");
    let mainBalance = getAmountByID("main-balance");
    if (
      isNaN(qotaInputAmount) ||
      qotaInputAmount <= 0 ||
      typeof qotaInputAmount === String ||
      mainBalance <= 0 ||
      mainBalance < qotaInputAmount
    ) {
      alert("Invalid input. Please enter a non-negative number.");
      return;
    } else {
    }
    let newAmount = qotaAmount + qotaInputAmount;
    let newBalance = mainBalance - qotaInputAmount;
    document.getElementById("qota-amount").innerText = newAmount.toFixed(2);
    document.getElementById("main-balance").innerText = newBalance.toFixed(2);
    my_modal_1.showModal();
    // doante history
    const inputValuex = parseFloat(document.getElementById("qota-input").value);
    const historySection = document.getElementById("history-section");
    const historyCard = document.createElement("div");
    historyCard.className =
      "bg-white p-4 rounded-lg mt-3 mx-auto shadow-lg w-10/12 border border-solid border-gray-500";
    historyCard.innerHTML = `
      <p class = 'text-xl font-bold text-black mb-1'> ${inputValuex.toFixed(
        2
      )} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
      <p> ${new Date().toDateString()} ${new Date().toLocaleTimeString()} GMT +0${-(
      new Date().getTimezoneOffset() / 60
    )}00 (Bangladesh Standard Time)  
    </p>
    `;
    historySection.appendChild(historyCard);
    // end
  });

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// sticky Heder

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const sticky = header.offsetTop;
  const twoBtn = document.getElementById("two-btn");

  if (window.innerWidth > 750) {
    if (window.pageYOffset > sticky) {
      header.classList.add(
        "bg-white",
        "bg-opacity-30",
        "shadow-md",
        "fixed",
        "top-0",
        "left-0",
        "w-full",
        "z-10",
        "backdrop-blur-md",
        "pb-3"
      );
      twoBtn.classList.add("lg:pt-2");
      nav.classList.remove("bg-[#f9f7f3]");
    } else {
      header.classList.remove(
        "bg-white",
        "bg-opacity-30",
        "shadow-md",
        "fixed",
        "top-0",
        "left-0",
        "w-full",
        "z-10",
        "backdrop-blur-md"
      );
      nav.classList.add("bg-[#f9f7f3]");
      twoBtn.classList.remove("lg:pt-2");
    }
  } else {
    header.classList.remove(
      "bg-white",
      "bg-opacity-30",
      "shadow-md",
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "z-10",
      "backdrop-blur-md",
      "pb-3"
    );
    nav.classList.add("bg-[#f9f7f3]");
    twoBtn.classList.remove("lg:pt-2");
  }
});
