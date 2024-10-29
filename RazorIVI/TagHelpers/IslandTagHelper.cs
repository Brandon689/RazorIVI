using Microsoft.AspNetCore.Razor.TagHelpers;

namespace RazorIVI.TagHelpers;

public class IslandTagHelper : TagHelper
{
    public string Name { get; set; }
    public string Id { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        var id = Id ?? $"{Name}-island";

        output.TagName = "div";
        output.Attributes.SetAttribute("id", id);

        // Ensure proper closing of the div
        output.TagMode = TagMode.StartTagAndEndTag;

        // Move the script outside the div
        output.PostElement.AppendHtml($"\n<script type=\"module\" src=\"/dist/{Name}-island.js\"></script>");
    }
}