import $ from 'jquery';
import StarRating from './StarRating';
import './ratings.scss';


export default function renderStarRating() {
  $(() => {
    $('.js-rating').each((index, node) => {
      const starRating = new StarRating($(node));
      return starRating;
    });
  });
}

renderStarRating();
