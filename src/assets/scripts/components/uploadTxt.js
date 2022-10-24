export default class uploadTxt {
  constructor() {
    this.init();
  }
  init() {
    $(function(){
      $('.c-formUpload').on('change', function () {
          var file = $(this).prop('files')[0];
          $('.c-formUploadTxt').text(file.name);
      });
    });
  }
}