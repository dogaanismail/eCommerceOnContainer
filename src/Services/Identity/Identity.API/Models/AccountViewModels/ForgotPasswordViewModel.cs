﻿namespace Microsoft.eCommerceOnContainers.Services.Identity.API.Models.AccountViewModels
{
    public record ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; init; }
    }
}
