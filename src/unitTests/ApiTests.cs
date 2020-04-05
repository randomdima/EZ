using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

namespace unitTests
{
    public class ApiTests: IClassFixture<WebApplicationFactory<minapi.Startup>>
    {
        private readonly WebApplicationFactory<minapi.Startup> _factory;

        public ApiTests(WebApplicationFactory<minapi.Startup> factory)
        {
            _factory = factory;
            System.Environment.SetEnvironmentVariable("TEST", "Hello World!");
        }

        [Fact]
        public void Successful()
        {
            Assert.True(true);
        }

        [Fact]
        public void EnvironmentVariableValue()
        {
            var envVariableValue = Environment.GetEnvironmentVariable("TEST");
            Assert.Equal("Hello World!", envVariableValue);
        }

        [Fact]
        public async Task GetHelloWorld()
        {
            var client = _factory.CreateClient();
            var envVariableValue = Environment.GetEnvironmentVariable("TEST");

            var response = await client.GetAsync("/");

            response.EnsureSuccessStatusCode();
            var responseText = await response.Content.ReadAsStringAsync();
            Assert.Equal(envVariableValue, responseText);
        }
    }
}
