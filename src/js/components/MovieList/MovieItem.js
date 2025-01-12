import Star from '../../../../public/star_filled.png';

/**
 * @param {Movie} movie
 */
export const MovieItem = (movie) => /* html */ `
<a href="/movie/${movie.id}">
  <div class="item-card" data-cy="movie-item">
    <img
      class="item-thumbnail"
      src="https://image.tmdb.org/t/p/original${movie.poster_path}"
      loading="lazy"
      alt="${movie.title}"
    />
    <p class="item-title">${movie.title}</p>
    <p class="item-score"><img src=${Star} alt="별점" />${movie.vote_average}</p>
  </div>
</a>
`;
