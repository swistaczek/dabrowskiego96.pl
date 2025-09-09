document.addEventListener('DOMContentLoaded', function() {
    // Funkcja do obliczania ostatniego dnia bieżącego miesiąca
    function getMonthEndDeadline() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        
        // Ostatni dzień miesiąca
        const lastDay = new Date(year, month + 1, 0);
        
        // Nazwy miesięcy po polsku
        const monthNames = [
            'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
            'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'
        ];
        
        // Formatowanie daty
        const day = lastDay.getDate();
        const monthName = monthNames[lastDay.getMonth()];
        const yearStr = lastDay.getFullYear();
        
        return `${day} ${monthName} ${yearStr} r., godz. 12:00`;
    }
    
    // Aktualizacja wszystkich elementów z klasą deadline-date
    const deadlineElements = document.querySelectorAll('.deadline-date');
    deadlineElements.forEach(element => {
        element.textContent = getMonthEndDeadline();
    });
});