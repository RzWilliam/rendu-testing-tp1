const members = []; // Simuler une base de données en mémoire

class Member {
  constructor(firstName, lastName, email, password) {
    this.id = members.length + 1;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  isValid() {
    // Validation de base pour vérifier que tous les champs sont présents et non vides
    return Boolean(
      this.firstName && this.lastName && this.email && this.password
    );
  }

  findAll() {
    return members;
  }

  save() {
    members.push(this);
  }

  static findById(id) {
    return members.find((member) => member.id === parseInt(id));
  }
}

// Fonction de validation externe
function validateMember(member) {
  return Boolean(
    member.firstName && member.lastName && member.email && member.password
  );
}

export { Member, validateMember };
