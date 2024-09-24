document.getElementById("history-btn").addEventListener("click", function () {
  const historyBtn = document
    .getElementById("history-btn")
    .classList.add("bg-[#b4f461]");
  const donateBtn = document
    .getElementById("donation-btn")
    .classList.remove("bg-[#b4f461]");
  const main = document.getElementById("main").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

// donation btn
document.getElementById("donation-btn").addEventListener("click", function () {
  const historyBtn = document
    .getElementById("history-btn")
    .classList.remove("bg-[#b4f461]");
  const donateBtn = document
    .getElementById("donation-btn")
    .classList.add("bg-[#b4f461]");
  const main = document.getElementById("main").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});
