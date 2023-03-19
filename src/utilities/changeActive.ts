export default function changeActive(array: NodeListOf<Element>, milliseconds: number): void {
  let index = 0;
  array[index].classList.add('active');
  setInterval(() => {
    array[index].classList.remove('active');
    index = (index + 1) % array.length;
    array[index].classList.add('active');
  }, milliseconds);
}