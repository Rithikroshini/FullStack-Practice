document.addEventListener('DOMContentLoaded', function() {
    const leaveForm = document.getElementById('leaveForm');
    const leaveType = document.getElementById('leaveType');
    const leaveDays = document.getElementById('leaveDays');
    const leaveBalance = document.getElementById('leaveBalance');

    const leaveBalanceData = {
        casual: 10,
        medical: 5
    };

    function displayLeaveBalance() {
        const selectedLeaveType = leaveType.value;
        if (selectedLeaveType) {
            leaveBalance.textContent = `Available ${selectedLeaveType} leaves: ${leaveBalanceData[selectedLeaveType]}`;
        } else {
            leaveBalance.textContent = "Select a leave type to view balance.";
        }
    }

    function updateLeaveBalance() {
        const selectedLeaveType = leaveType.value;
        const days = parseInt(leaveDays.value);
        if (!isNaN(days) && selectedLeaveType) {
            leaveBalanceData[selectedLeaveType] -= days;
            displayLeaveBalance();
        }
    }

    leaveForm.addEventListener('submit', function(e) {
        e.preventDefault();
        updateLeaveBalance();
        leaveDays.value = "";
    });

    leaveType.addEventListener('change', displayLeaveBalance);

    displayLeaveBalance();
});
