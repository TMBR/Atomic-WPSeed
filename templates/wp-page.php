<?
/**
 * @author      Flurin Dürst
 * @version     1.2.1
 * @since       WPSeed 0.1
 */
?>

<? get_header(); ?>

<!-- content » page -->


  <div class="content page">

  <?php tmbr_load_template( 'partials/atom/button.php', array('class' => '') ); ?>
  <?php tmbr_load_template( 'partials/atom/button.php', array('class' => '-orange') ); ?>
  <?php tmbr_load_template( 'partials/atom/button.php', array('class' => '-orange -large') ); ?>

    <? if (have_posts() ) : while (have_posts()) : the_post(); ?>
      <section>
        <h1><? the_title(); ?></h1>
        <? the_post_thumbnail('medium'); ?>
        <? the_content(); ?>
      </section>
    <? endwhile; endif; ?>

  </div>

<? get_footer(); ?>
