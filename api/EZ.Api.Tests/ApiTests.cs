using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

namespace EZ.Api.Tests
{
    public class ApiTests: IClassFixture<WebApplicationFactory<Startup>>
    {
        private readonly WebApplicationFactory<Startup> _factory;

        public ApiTests(WebApplicationFactory<Startup> factory)
        {
            _factory = factory;
            System.Environment.SetEnvironmentVariable("TEST", "Hello World!");
        }
    }
}
