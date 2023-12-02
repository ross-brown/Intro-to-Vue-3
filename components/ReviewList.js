app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <p v-if="review.recommend === 'yes'">{{ review.name }} recommends this product!</p>
        <br />
        "{{ review.review }}"
        <hr>
      </li>
    </ul>
  </div>`
})
