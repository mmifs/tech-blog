const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'Beatae error id or qui culpa yet aspernatur. Quia. Occaecat nostrud. Eum aperiam. Quam adipisicing omnis for duis, elit so consequat but exercitationem. Anim aute aliquid. Mollit rem excepteur,',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Cupidatat excepteur or illo nor numquam yet ipsum ut consequatur. Iure consequatur perspiciatis aliqua ea. Aliquip ea voluptatem, nor iure illo. Laboriosam exercitationem.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'Velit. Nesciunt nisi for deserunt. Excepteur veniam. Nihil modi and esse for eos. Velit autem. Aliquip.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_content: 'Ad architecto, and occaecat. Doloremque exercitation for exercitation for est nor vel so commodi. Aliquid. Eu et nostrum nor quo exercitationem nor tempor.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'Commodi numquam. Ad adipisci but quaerat. Quisquam sint illo or esse so rem.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'Id quasi nor do nor ipsa, yet et but fugit. Eu ex nor culpa. Et iure pariatur eos nor quam rem.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Laudantium aliquam yet consequuntur but magna. Error mollit nihil and pariatur vel for enim. Cillum enim but aperiam so laborum.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Ipsa excepteur for nostrud autem so corporis or minima. Adipisicing tempora, quasi. Quis suscipit yet lorem yet esse aspernatur. Magni eu aliqua and magna nor ex consequat.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_content: 'Error mollit nihil and pariatur vel for enim. Cillum enim but aperiam so laborum.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content: 'Corporis est so architecto nor est and iure laboris quisquam. Accusantium in dolore for duis, in, veniam.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Accusantium deserunt so perspiciatis, exercitationem nostrum so exercitation, or laudantium.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content: 'Nulla voluptatem doloremque, for laudantium natus veritatis. Mollit aliquid or tempor quo.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_content: 'Qui anim yet qui nostrum so est yet laudantium duis. Laborum. Veritatis eaque.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_content: 'Nemo enim but laboris. Deserunt cillum or quae, dolores or excepteur nor eaque but accusantium.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_content: 'Culpa numquam, or quasi nor vel, and ad. Dolor commodo nor do dolore eiusmod.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_content: 'Fugiat. Minim magni totam, excepteur and minim. Aliqua nostrum non yet doloremque quisquam.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Iste qui, so voluptatem consequuntur, or magnam natus. ',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_content: 'Ex officia ut but velitesse voluptas explicabo accusantium.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_content: 'Nemo enim but laboris. Deserunt cillum or quae, dolores or excepteur nor eaque but accusantium.',
    user_id: 6
  },
  {
    title: 'Minim magni totam, excepteur and minim. Aliqua nostrum non yet doloremque quisquam.',
    post_content: 'https://java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
