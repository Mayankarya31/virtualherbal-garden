
function toggleDetails(elementId) {
    const details = document.querySelectorAll('.herb-details');
    details.forEach(detail => {
        if (detail.id === elementId) {
            detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
        } else {
            detail.style.display = 'none';
        }
    });
}