
import Swal from 'sweetalert2';


export const confirmationModal = async (message) => {
  const response = await Swal.fire({
    title: "Are you sure?",
    text: message || "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#00877A",
    cancelButtonColor: "#EF5555",
    confirmButtonText: "Yes, delete it!",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  });

  return response;
};


export const showWarningModal = async (message) => {
  const response = await Swal.fire({
    // title: "Are you sure?",
    text: message || "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    showConfirmButton: false,
    cancelButtonColor: "#ff8345",
    cancelButtonText: "Close",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  });

  return response;
};


export const showErrorModal = async (message) => {
  const response = await Swal.fire({
    // title: "Are you sure?",
    text: message || "You won't be able to revert this!",
    icon: "error",
    showCancelButton: true,
    showConfirmButton: false,
    cancelButtonColor: "#ee5151",
    cancelButtonText: "Close",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  });

  return response;
};


export const showConfirmationModalWithBtnName = async (message, btnText) => {
  const response = await Swal.fire({
    title: "Are you sure?",
    text: message || "You won't be able to revert this!",
    showCancelButton: true,
    icon : "warning",
    iconColor : "#52565376", 
    showConfirmButton: true,
    confirmButtonText: btnText || "Submit",
    confirmButtonColor: "#00877A",
    cancelButtonColor: "#ee5151",
    cancelButtonText: "Cancel",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },

    didOpen: () => {
        document.querySelector('.swal2-popup').style.width = '500px';
        document.querySelector('.swal2-title').style.fontSize = '20px';
        document.querySelector('.swal2-html-container').style.fontSize = '16px';
        const confirmButton = document.querySelector('.swal2-confirm');
        confirmButton.style.fontSize = '16px';// Rounded corners

        const cancelButton = document.querySelector('.swal2-cancel');
        if (cancelButton) {
            cancelButton.style.fontSize = '16px'; 
        }

        const modal = document.querySelector('.swal2-popup');
        modal.style.backgroundColor = '#F9FAFB';
        modal.style.paddingTop = "10px"
      },
  });

  return response;
};