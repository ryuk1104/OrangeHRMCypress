describe('Automatización de Login OrangeHRM', () => {

  it('Iniciar sesión con credenciales válidas', () => {
    // 1. Visitar la URL de la página de prueba
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Localizar el campo de usuario e ingresar la credencial
    cy.get('input[name="username"]').type('Admin');

    // 3. Localizar el campo de contraseña e ingresar la credencial
    cy.get('input[name="password"]').type('admin123');

    // 4. Localizar el botón de inicio de sesión y hacer clic
    cy.get('button[type="submit"]').click();

    // 5. Validar que la redirección al panel principal fue exitosa
    cy.url().should('include', '/dashboard');
  });

});