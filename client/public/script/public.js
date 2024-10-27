import Swal from "sweetalert2"; // استيراد مكتبة SweetAlert2
import "sweetalert2/dist/sweetalert2.min.css"; // استيراد الأنماط الافتراضية لـ SweetAlert2

export function alert_msg(msg, type) {
    const toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      customClass: { container: "no-select toast " },
    });
  
    toast.fire({
      icon: type || "success",
      title: msg || "",
    });
  }


  // "success", "error", "info", "warning"