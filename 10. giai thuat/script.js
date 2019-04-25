function ten_SanPham(name){
this.name = name;
};
function DS_SanPham(){
    this.DSSP= ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4', 'Apple iPhone 6S', 'Xiaomi Mi 5s Plus', 'Apple iPhone 8 Plus', 'Fujitsu F-04E', 'Oppo A71']
    this.themSanPham = function(spthem){
        this.DSSP.push(spthem)
    }
    this.suaSanPham = function(){
        
    }
    this.xoaSanPham = function() {

    }
}console.log(DS_SanPham())