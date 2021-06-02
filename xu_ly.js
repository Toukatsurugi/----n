class SinhVien {
    danh_sach = [];
    chi_so;
    the_danh_sach;
    stt;
    ma_sv;
    ten_sv;
    sdt_sv;

    nut_dang_ky;
    nut_cap_nhat;

    thiet_lap_the_danh_sach( ts_the_danh_sach ){
        this.the_danh_sach = ts_the_danh_sach;
    }
    hien_thi_danh_sach(){

        //làm rỗng các input
        this.lam_rong_input();
        let table_html = '';
        if( this.danh_sach.length > 0 ){
            let i = 0;
            while ( i < this.danh_sach.length ) {

                //tạo bảng chứa thông tin 
                table_html += '<tr>';
                    table_html += `<td data-a-h="center" data-b-a-s="medium"> ${ this.danh_sach[i][0] } </td>`;
                    table_html += `<td data-a-h="center" data-b-a-s="medium"> ${ this.danh_sach[i][1] } </td>`;
                    table_html += `<td data-a-h="center" data-b-a-s="medium"> ${ this.danh_sach[i][2] } </td>`;
                    table_html += `<td data-a-h="center" data-b-a-s="medium"> ${ this.danh_sach[i][3] } </td>`;
                    table_html += `<td data-exclude="true"> 
                                    <span class="btn-sua" onclick="objSinhVien.sua_sinh_vien( ${i} );">Sửa</span> | 
                                    <span class="btn-xoa" onclick="objSinhVien.xoa_sinh_vien( ${i} );">Xóa</span> 
                                </td>`;
                table_html += '</tr>';
                i++;
            }
        }
        this.the_danh_sach.innerHTML = table_html;
    }
    them_sinh_vien( ){
        let thong_tin_sv = [this.stt,this.ma_sv,this.ten_sv,this.sdt_sv];
        this.danh_sach.push( thong_tin_sv );

        //làm rỗng input
        this.lam_rong_input();

        //hiển thị danh sách
        this.hien_thi_danh_sach();
    }
    sua_sinh_vien( index ){
        this.chi_so = index;
        let ma_sv           = this.danh_sach[this.chi_so][1];
        let ho_ten          = this.danh_sach[this.chi_so][2];
        let so_dien_thoai   = this.danh_sach[this.chi_so][3];

        //đưa các giá trị vào ô input
        document.getElementById('ma_sv').value          = ma_sv;
        document.getElementById('ho_ten').value         = ho_ten;
        document.getElementById('so_dien_thoai').value  = so_dien_thoai;

        //đổi nút
        let nut_cap_nhat = document.getElementById('nut_cap_nhat');
        let nut_dang_ky  = document.getElementById('nut_dang_ky');
        nut_cap_nhat.style.display  = 'inline';
        nut_dang_ky.style.display   = 'none';
    }
    cap_nhat_sinh_vien(){
        this.danh_sach[this.chi_so][1] = this.ma_sv;
        this.danh_sach[this.chi_so][2] = this.ten_sv;
        this.danh_sach[this.chi_so][3] = this.sdt_sv;

        //làm rỗng các input
        this.lam_rong_input();

        //đổi nút
        let nut_cap_nhat = document.getElementById('nut_cap_nhat');
        let nut_dang_ky  = document.getElementById('nut_dang_ky');
        nut_cap_nhat.style.display  = 'none';
        nut_dang_ky.style.display   = 'inline';

        //hiển thị lại danh sách
        this.hien_thi_danh_sach();

    }
    xoa_sinh_vien( index ){
        this.chi_so = index;
        let xac_nhan = confirm('Bạn có chắc chắn xóa hay không ?');
        if( xac_nhan == true ){
            this.danh_sach.splice(this.chi_so,1);   

            //viết lại stt
            this.stt= this.stt - 1;
            for (let i= this.chi_so; i<=this.stt-1; i++){
                this.danh_sach[i][0]= i+1;
            }
            this.hien_thi_danh_sach();
        
        }
    }
    lam_rong_input(){
        document.getElementById('ma_sv').value          = '';
        document.getElementById('ho_ten').value         = '';
        document.getElementById('so_dien_thoai').value  = '';
    }
}