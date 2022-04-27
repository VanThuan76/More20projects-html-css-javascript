///Show-Plans
export function showPlans() {
  const valueTodo = +document.querySelector(".header-todo--child>p")
    .textContent;
  const valueProgress =
    +document.querySelector(".header-progress>p").textContent;
  const valueDone = +document.querySelector(".header-done>p").textContent;
  const percent = 100 / (valueTodo + valueProgress + valueDone);
  const planTodo = percent * valueTodo;
  const planProgress = percent * valueProgress;
  const planDone = percent * valueDone;
  const dataTodo = planTodo >= 0 ? `${Math.round(planTodo)}%` : "0%";
  const dataProgress =
    planProgress >= 0 ? `${Math.round(planProgress)}%` : "0%";

  const dataDone = planDone >= 0 ? `${Math.round(planDone)}%` : "0%";
  document.querySelector(".navbar-todo").style.width = dataTodo;
  document.querySelector(".navbar-progress").style.width = dataProgress;
  document.querySelector(".navbar-done").style.width = dataDone;
  document.querySelector(".note-percent-todo").textContent = dataTodo;
  document.querySelector(".note-percent-progress").textContent = dataProgress;
  document.querySelector(".note-percent-done").textContent = dataDone;
  if (valueDone !== 0 || valueProgress !== 0 || valueTodo !== 0) {
    document.querySelector(".wrap-plans").classList.add("show-plans");
  }
}
export function hiddenPlans() {
  const valueTodo = +document.querySelector(".header-todo--child>p")
    .textContent;
  const valueProgress =
    +document.querySelector(".header-progress>p").textContent;
  const valueDone = +document.querySelector(".header-done>p").textContent;
  if (valueDone === 0 && valueProgress === 0 && valueTodo === 0) {
    document.querySelector(".wrap-plans").classList.remove("show-plans");
  }
}
