import { loaderEl, loadMoreBtn } from "./refs";
export function hideLoader () {
  loaderEl.classList.remove("active");
}

export function showLoader () {
  loaderEl.classList.add("active");
}
export function hideMoreBtn () {
  loadMoreBtn.classList.add('is-hidden');
}

export function showMoreBtn () {
  loadMoreBtn.classList.remove('is-hidden');
}