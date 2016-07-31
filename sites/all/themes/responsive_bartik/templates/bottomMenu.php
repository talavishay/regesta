<?php if ($main_menu): ?>
  <nav  class="navigation bottom">
    <?php print theme('links__system_main_menu', array(
      'links' => $main_menu,
      'attributes' => array(
      'id' => 'main-menu-links_footer','class' => array('links'),
  ))); ?>
</nav> <!-- /#main-menu -->
<?php endif; ?>
