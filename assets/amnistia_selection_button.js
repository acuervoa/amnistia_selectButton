(function ($) {
   jQuery(document).ready(function () {

    jQuery('.selectButton-container').each(function () {
      sync_selectButton_and_select(jQuery(this).attr('id'));
    });

    jQuery('.selectButton-input').on('click', function () {

//        $('#selectButton-selected').val(this.id).trigger('change');
        $('.selectButton-input').each(function () {
        $(this).removeClass('value-selected');
      });
      $(this).addClass('value-selected');

      sync_selectButton_and_select(jQuery(this).parents('.selectButton-container').attr('id'));
    });


    function sync_selectButton_and_select(selectButton_id) {
      console.log(selectButton_id);
      var selectButton_value_selected = jQuery('#'+selectButton_id+' .selectButton-wrapper .selectButton-slide .value-selected').attr('id');
      console.log(selectButton_value_selected);
      var select_id = selectButton_id.replace('selectButton-', '');
      var $select = jQuery('#'+select_id);
      $select.val(selectButton_value_selected).change();
    }

  });
})(jQuery)