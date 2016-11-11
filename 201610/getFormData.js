// 将获取到的表单值转换成url传值形式：advice=&username=&mobile=&email=&code=
$('#form1').serialize();
// 将获取到的表单值转换成js数组形式
function getFormJson(formId) {
	var o = {};
	// 获取表单数据并转换成数组对象
	var a = $(formId).serializeArray();

	// 遍历出键值对
	$.each(a, function () {
		if (o[this.name] !== undefined) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
}