using FIrebaseApp.Interfaces;
using FIrebaseApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FIrebaseApp.Data
{
    public class UserStorage : IStorage<User>
    {
        private List<User> users = new List<User>();

        public Task<User> Create(User entity)
        {
            int maxId = users.Select(p => p.Id).Max();
            entity.Id = maxId + 1;

            users.Add(entity);

            return Task.FromResult(entity);
        }

        public Task<int> Delete(int id)
        {
            var deletedItem = users.Find(p => p.Id == id);

            if (deletedItem != null)
            {
                users.Remove(deletedItem);
                return Task.FromResult(id);
            }
            else
            {
                return Task.FromResult(int.MinValue);
            }
        }

        public Task<List<User>> Get()
        {
            return Task.FromResult(users);
        }

        public Task<User> GetBy(Func<User, bool> predicate)
        {
            return Task.FromResult(users.FirstOrDefault(predicate));
        }

        public Task<User> Update(User entity)
        {
            var updatedItemIndex = users.FindIndex(p => p.Id == entity.Id);

            if (updatedItemIndex != -1)
            {
                users[updatedItemIndex] = entity;
                return Task.FromResult(entity);
            }
            else
            {
                return null;
            }
        }
    }
}
