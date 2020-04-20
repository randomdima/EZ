using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;
using EZ.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace EZ.Api.Controllers
{
    [Route("/todos")]
    public class TodosController : ControllerBase
    {
        private static int _counter = 0;
        private static ConcurrentDictionary<int, Todo> _todos = new ConcurrentDictionary<int, Todo>();

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_todos.Values);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Todo todo)
        {
            Interlocked.Increment(ref _counter);
            todo.Id = _counter;
            _todos.TryAdd(todo.Id, todo);
            return Created($"/todos/{todo.Id}", todo);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            if (_todos.TryRemove(id,out var todo))
            {
                return NoContent();
            }

            return NotFound();
        }
    }
}