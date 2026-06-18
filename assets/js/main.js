/* =================================================================
   ALTA ASSURANCES — Interactions globales
   Vanilla JS, sans dépendance. Chargé en fin de page.
   ================================================================= */
(function () {
  "use strict";

  /* --------------------------------------------------------------
     1. Menu mobile (bouton hamburger)
     -------------------------------------------------------------- */
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var ouvert = nav.classList.toggle("ouvert");
      burger.setAttribute("aria-expanded", ouvert ? "true" : "false");
    });

    // Ferme le menu quand on clique sur un lien
    nav.querySelectorAll("a").forEach(function (lien) {
      lien.addEventListener("click", function () {
        nav.classList.remove("ouvert");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --------------------------------------------------------------
     2. Cartes « atouts » : prise en charge tactile
        Sur écran tactile (pas de survol), un tap révèle la phrase.
     -------------------------------------------------------------- */
  var estTactile = window.matchMedia("(hover: none)").matches;
  if (estTactile) {
    document.querySelectorAll(".atout").forEach(function (carte) {
      carte.addEventListener("click", function () {
        carte.classList.toggle("est-actif");
      });
    });
  }

  /* --------------------------------------------------------------
     3. Accordéon FAQ — ouverture unique
        (l'ouverture d'une question ferme automatiquement les autres)
     -------------------------------------------------------------- */
  var faqItems = Array.prototype.slice.call(document.querySelectorAll(".faq__item"));

  function fermerFaq(item) {
    item.classList.remove("ouvert");
    var q = item.querySelector(".faq__q");
    var r = item.querySelector(".faq__r");
    if (q) q.setAttribute("aria-expanded", "false");
    if (r) r.style.maxHeight = null;
  }

  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq__q");
    var reponse = item.querySelector(".faq__r");
    if (!question || !reponse) return;

    question.addEventListener("click", function () {
      var dejaOuvert = item.classList.contains("ouvert");
      // On ferme toutes les questions...
      faqItems.forEach(fermerFaq);
      // ...puis on ouvre celle cliquée si elle ne l'était pas déjà
      if (!dejaOuvert) {
        item.classList.add("ouvert");
        question.setAttribute("aria-expanded", "true");
        reponse.style.maxHeight = reponse.scrollHeight + "px";
      }
    });
  });

  /* --------------------------------------------------------------
     4. Apparition douce au défilement (IntersectionObserver)
     -------------------------------------------------------------- */
  var aReveler = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && aReveler.length) {
    var observateur = new IntersectionObserver(
      function (entrees) {
        entrees.forEach(function (entree) {
          if (entree.isIntersecting) {
            entree.target.classList.add("visible");
            observateur.unobserve(entree.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    aReveler.forEach(function (el) { observateur.observe(el); });
  } else {
    // Repli : tout afficher si l'API n'est pas disponible
    aReveler.forEach(function (el) { el.classList.add("visible"); });
  }

  /* --------------------------------------------------------------
     5. Formulaire de contact → ouvre la messagerie de l'utilisateur
        Aucun traitement serveur : on construit un lien « mailto: »
        pré-rempli avec les champs saisis, puis on l'ouvre.
     -------------------------------------------------------------- */
  var formContact = document.querySelector("[data-form-contact]");
  if (formContact) {
    formContact.addEventListener("submit", function (e) {
      e.preventDefault();
      var destinataire = formContact.getAttribute("data-email") || "contact@alta-assurances.fr";

      var nom = (formContact.querySelector("[name=nom]") || {}).value || "";
      var societe = (formContact.querySelector("[name=societe]") || {}).value || "";
      var tel = (formContact.querySelector("[name=telephone]") || {}).value || "";
      var courriel = (formContact.querySelector("[name=courriel]") || {}).value || "";
      var message = (formContact.querySelector("[name=message]") || {}).value || "";

      var sujet = "Demande d'information — " + (nom || "Site Alta Assurances");
      var corps =
        "Nom prénom : " + nom + "\n" +
        "Courriel : " + courriel + "\n" +
        "Société : " + societe + "\n" +
        "Numéro de téléphone : " + tel + "\n\n" +
        "Message :\n" + message;

      window.location.href =
        "mailto:" + destinataire +
        "?subject=" + encodeURIComponent(sujet) +
        "&body=" + encodeURIComponent(corps);
    });
  }

  /* --------------------------------------------------------------
     6. Année dynamique dans le pied de page
     -------------------------------------------------------------- */
  document.querySelectorAll("[data-annee]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
