﻿global using Azure.Core;
global using Azure.Identity;
global using Autofac.Extensions.DependencyInjection;
global using Autofac;
global using Microsoft.eCommerceOnContainers.Services.Catalog.API.Extensions;
global using Microsoft.eCommerceOnContainers.Services.Catalog.API.Infrastructure.ActionResults;
global using Microsoft.eCommerceOnContainers.Services.Catalog.API.Infrastructure.Exceptions;
global using Microsoft.eCommerceOnContainers.Services.Catalog.API.IntegrationEvents;
global using Grpc.Core;
global using Microsoft.AspNetCore.Mvc.Filters;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.AspNetCore.Server.Kestrel.Core;
global using Microsoft.AspNetCore;
global using Microsoft.EntityFrameworkCore.Design;
global using Microsoft.EntityFrameworkCore.Metadata.Builders;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBus.Abstractions;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBus.Events;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.IntegrationEventLogEF.Services;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.IntegrationEventLogEF.Utilities;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.IntegrationEventLogEF;
global using Microsoft.eCommerceOnContainers.Services.Catalog.API.Infrastructure;
global using Microsoft.eCommerceOnContainers.Services.Catalog.API.Infrastructure.EntityConfigurations;
global using Microsoft.eCommerceOnContainers.Services.Catalog.API;
global using Microsoft.eCommerceOnContainers.Services.Catalog.API.IntegrationEvents.Events;
global using Microsoft.eCommerceOnContainers.Services.Catalog.API.Model;
global using Microsoft.eCommerceOnContainers.Services.Catalog.API.ViewModel;
global using Microsoft.eCommerceOnContainers.Services.Catalog.API.Grpc;
global using Microsoft.Extensions.Options;
global using Polly.Retry;
global using Polly;
global using Serilog.Context;
global using Serilog;
global using System.Data.Common;
global using System.Data.SqlClient;
global using System.Globalization;
global using System.IO.Compression;
global using System.Net;
global using System.Text.RegularExpressions;
global using Microsoft.eCommerceOnContainers.Services.Catalog.API.Infrastructure.Filters;
global using HealthChecks.UI.Client;
global using Microsoft.AspNetCore.Diagnostics.HealthChecks;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBus;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBusRabbitMQ;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBusServiceBus;
global using Microsoft.eCommerceOnContainers.Services.Catalog.API.IntegrationEvents.EventHandling;
global using Microsoft.Extensions.Diagnostics.HealthChecks;
global using Microsoft.OpenApi.Models;
global using RabbitMQ.Client;
global using System.Reflection;