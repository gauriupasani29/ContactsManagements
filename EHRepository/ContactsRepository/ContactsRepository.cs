using EHRepository.GenericRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace EHRepository.ContactsRepository
{
    public class ContactsRepository : GenericRepository<Contacts>, IContactsRepository
    {
        private readonly IGenericRepository<Contacts> _repository;

        public ContactsRepository(IGenericRepository<Contacts> repository)
        {
            _repository = repository;
        }

        public void AddContact(Contacts contact)
        {
            _repository.Add(contact);
            _repository.Save();
        }

        public void EditContact(Contacts contact)
        {
            _repository.Edit(contact);
            _repository.Save();
        }

        public void DeleteContact(int id)
        {
            _repository.Delete(id);
            _repository.Save();
        }

        public void InactivateContact(int contactID)
        {
            Contacts contact = _repository.GetById(contactID);
            contact.Status = "Inactive";
            _repository.Edit(contact);
            _repository.Save();
        }

        public IEnumerable<Contacts> GetListOfContacts()
        {
            IEnumerable<Contacts> contacts = _repository.GetList();
            return contacts;
        }

    }
}
