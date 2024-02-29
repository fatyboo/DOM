

taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêcher le formulaire de se soumettre

  const taskText = taskInput.value.trim(); // Récupérer le texte de la tâche et enlever les espaces inutiles

  if (taskText !== '') {
    // Créer un nouvel élément de liste
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    // Ajouter la tâche à la liste
    taskList.appendChild(taskItem);
    // Réinitialiser le champ de texte
    taskInput.value = '';
  }
});