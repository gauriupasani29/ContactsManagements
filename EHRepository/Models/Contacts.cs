using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace EHRepository
{
    public partial class Contacts
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public long? PhoneNumber { get; set; }
        public string Status { get; set; }
    }
}
