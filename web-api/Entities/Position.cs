using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Entities
{
    public class Position
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Pay { get; set; }
        public int HoursPerDay { get; set; }
        public string Requirements { get; set; }
        public virtual ICollection<User> Users { get; set; }
        public virtual ICollection<Application> Applications { get; set; }
    }
}
