<?php
function responsive_bartik_form_system_theme_settings_alter(&$form, $form_state){
  array_unshift($form,  array(
    '#type'          => 'textfield',
    '#title'         => t('label name for the foo_example setting'),
    '#default_value' => theme_get_setting('foo_example'),
    '#description'   => t("this text can be used in the templates."),
  ));
  return $form;
};
