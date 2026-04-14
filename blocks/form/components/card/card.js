import { createOptimizedPicture } from '../../../../scripts/aem.js';

export default function decorate(element) {
  element.classList.add('card');

  const base = window.hlx?.codeBasePath || '';
  const cardIconSrc = `${base}/blocks/form/components/card/images/card.png`;

  element.querySelectorAll('.radio-wrapper').forEach((radioWrapper) => {
    const image = createOptimizedPicture(
      cardIconSrc,
      'Payment card',
    );
    radioWrapper.appendChild(image);
  });

  return element;
}