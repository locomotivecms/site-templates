
document.addEventListener('locomotive::section::select', event => {
  const { sectionId } = event.detail;
  const $section  = $(`#locomotive-section-${sectionId}`);
  $('.locomotive-section').removeClass('section-selected');
  $(`#locomotive-section-${sectionId}`).addClass('section-selected');
  console.log('the user is viewing: ', $section);
});
document.addEventListener('locomotive::block::load', event => {
  const { sectionId, blockId } = event.detail;
  const $section  = $(`#locomotive-section-${sectionId}`);
  const $block    = $(`[data-locomotive-block="section-${sectionId}-block-${blockId}"]`, $section);
  console.log('the user has updated: ', $block);
});