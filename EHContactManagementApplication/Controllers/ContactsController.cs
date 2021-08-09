using EHRepository;
using EHRepository.ContactsRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;

namespace EHContactManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IContactsRepository _repository;
        public ContactsController(IContactsRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Route("/api/list-contacts")]
        public IEnumerable<Contacts> ListContacts()
        {
            IEnumerable<Contacts> contacts = _repository.GetListOfContacts();
            return contacts;
        }

        [HttpGet("{id}")]
        [Route("/api/contacts")]
        public Contacts GetContact([FromQuery] int id)
        {
            Contacts contact = _repository.GetListOfContacts().Where(s => s.Id == id).FirstOrDefault();
            return contact;
        }

        [HttpPost]
        [Route("/api/add-contact")]
        public void AddContact([FromBody] JsonElement contactjson)
        {
            JToken jContact = JObject.Parse(JsonSerializer.Serialize(contactjson))["contact"];
            Contacts contact = new Contacts()
            {
                FirstName = (string)jContact["firstName"],
                LastName = (string)jContact["lastName"],
                Email = (string)jContact["email"],
                PhoneNumber = (long)jContact["phoneNumber"],
                Status = (string)jContact["status"],
            };

            _repository.AddContact(contact);
        }

        [HttpPut]
        [Route("/api/edit-contact")]
        public void EditContact([FromBody] JsonElement contactjson)
        {
            JToken jContact = JObject.Parse(JsonSerializer.Serialize(contactjson))["contact"];
            Contacts contact = new Contacts()
            {
                Id = (int)jContact["id"],
                FirstName = (string)jContact["firstName"],
                LastName = (string)jContact["lastName"],
                Email = (string)jContact["email"],
                PhoneNumber = (long)jContact["phoneNumber"],
                Status = (string)jContact["status"],
            };
            _repository.EditContact(contact);
        }

        [HttpPut("id")]
        [Route("/api/deactivate-contact")]
        public void InactivateContact([FromQuery] int id)
        {
            _repository.InactivateContact(id);
        }

        [HttpDelete("{id}")]
        [Route("/api/delete-contact")]
        public void Delete([FromQuery] int id)
        {
            _repository.DeleteContact(id);
        }
    }
}
