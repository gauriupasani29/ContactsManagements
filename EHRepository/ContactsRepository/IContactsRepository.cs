using EHRepository.GenericRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace EHRepository.ContactsRepository
{
    public interface IContactsRepository: IGenericRepository<Contacts>
    {
        IEnumerable<Contacts> GetListOfContacts();
        void AddContact(Contacts contact);
        void EditContact(Contacts contact);
        void DeleteContact(int contactid);
        void InactivateContact(int contactid);
    }
}
