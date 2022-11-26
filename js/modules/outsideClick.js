export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outiside";

  if (!html.hasAttribute(outside)) {
    events.forEach((userEvents) => {
      setTimeout(() => {
        html.addEventListener(userEvents, handleOutsideClick);
      });
    });
    html.setAttribute(outside, "");
    return handleOutsideClick;
  }

  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      events.forEach((userEvents) => {
        html.removeEventListener(userEvents, handleOutsideClick);
      });
      callback();
      html.removeAttribute(outside);
    }
  }
}
