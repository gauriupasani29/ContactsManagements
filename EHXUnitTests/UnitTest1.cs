using System;
using EHContactManagementAPI.Controllers;
using EHRepository;
using EHRepository.ContactsRepository;
using Moq;

using Xunit;


namespace EHXUnitTests
{
    public class UnitTest1
    {
        public Mock<IContactsRepository> mock = new Mock<IContactsRepository>();

        [Fact]
        public  void GetContactById()
        {
            var contact = new Contacts()
            {
                Id = 3,
                FirstName = "gauri",
                LastName = "Upasani",
                Email = "upasanigauri2405@gmail.com",
                PhoneNumber= 9607789898,
                Status ="Active"
            };
            mock.Setup(p => p.GetById(3)).Returns(contact);
            ContactsController objContact = new ContactsController(mock.Object);
            var result = objContact.GetContact(2);
            Assert.False(contact.Equals(result));
        }
    }
}
